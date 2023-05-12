import currency from 'currency.js'
import moment from 'moment'
import { reactive } from 'vue'
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
} from 'vue-router'
import { Logic } from '..'
import {
  EmitTypes,
  FetchRule,
  LoaderSetup,
  SocketReturn,
  StatusCodes,
} from '../types/common'
import { ValidationError } from '../types/domains/common'
import { AxiosError } from 'axios'
import io, { Socket } from 'socket.io-client'
import { AuthResponse } from '../types/domains/auth'

export default class Common {
  public router: Router | undefined = undefined

  public apiUrl: string | undefined = undefined

  public watchInterval: number | undefined = undefined

  public loadingState = false

  public SocketClient: Socket | undefined

  public timeEquivalentsInSeconds = {
    '5s': 5,
    '10s': 10,
    '20s': 20,
    '30s': 30,
    '1m': 60,
    '1m 30s': 90,
    '2m': 120,
    '3m': 180,
    '4m': 240,
    '5m': 300,
  }

  public EquivalentsSecondsInString = {
    '5': '5s',
    '10': '10s',
    '20': '20s',
    '30': '30s',
    '60': '1m',
    '90': '1m 30s',
    '120': '2m',
    '180': '3m',
    '240': '4m',
    '300': '5m',
  }

  public setupWebsocket = () => {
    const fullSocketUrl = `${process.env.VUE_APP_API_URL}/api/socket.io`
    const domain = `${process.env.VUE_APP_API_URL}`
    const path = `/api/socket.io`

    const tokens: AuthResponse = localStorage.getItem('AuthTokens')
      ? JSON.parse(localStorage.getItem('AuthTokens') || '{}')
      : undefined

    const accessToken = `${tokens?.accessToken}`

    this.SocketClient = io(domain, {
      path: path,
      auth: { token: accessToken },
    })
  }

  public listenOnSocket = (
    initialChannel,
    listener: Function,
    onleave: Function,
  ) => {
    let finalChannel = ''

    this.SocketClient.emit(
      'join',
      { channel: initialChannel },
      (res: SocketReturn) => {
        finalChannel = res.channel
        if (res.code !== StatusCodes.success) return
        this.SocketClient.on(
          finalChannel,
          (data: { channel: string; type: EmitTypes; data: any }) => {
            if (finalChannel !== data.channel) return
            // Do whatever you want with the data depending on the type emitted
            listener(data)
          },
        )
      },
    )

    const closeConnection = () => {
      try {
        this.SocketClient.emit(
          'leave',
          { channel: finalChannel },
          (res: SocketReturn) => {
            // Perform any cleanup after the connection is closed
            onleave(res)
          },
        )
      } catch (e) {
        return e
      }
    }

    return {
      closeConnection,
    }
  }

  public SetRouter = (router: Router) => {
    this.router = router
  }

  public makeid = (length: number) => {
    let result = ''
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  public showValidationError = (error: AxiosError, formElement: any) => {
    const responseData: any = error.response?.data

    const validationErrors: ValidationError[] = responseData

    if (validationErrors) {
      validationErrors.forEach((validation) => {
        const field: any = formElement.fieldsToValidate[validation.field]

        if (field) {
          field.showError(validation.message)
        }
      })
    }

    this.hideLoader()
  }

  public capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  public loaderSetup: LoaderSetup = reactive({
    show: false,
    useModal: false,
    hasError: false,
    loading: false,
    message: '',
    ctaText: '',
    ctaFunction: () => {},
    icon: 'success-thumb',
    title: '',
  })

  public SetApiUrl = (apiUrl: string) => {
    this.apiUrl = apiUrl
  }

  public GoToRoute = (path: string) => {
    this.router?.push(path)
  }

  public convertToFormData = (data: any) => {
    // convert request data to formData
    const formData: FormData = new FormData()

    for (const key in data) {
      const param = data[key]
      if (Array.isArray(param)) {
        formData.append(`${key}`, JSON.stringify(param))
      } else {
        if (typeof param != 'string' && param instanceof Blob == false) {
          formData.append(key, JSON.stringify(param))
        } else {
          formData.append(key, param)
        }
      }
    }

    return formData
  }

  public mediaQuery = (): 'lg' | 'mdlg' | 'md' | 'sm' | 'xl' | '2xl' => {
    const windowWidth = window.screen.width

    if (windowWidth <= 640) {
      return 'sm'
    } else if (windowWidth > 640 && windowWidth <= 768) {
      return 'md'
    } else if (windowWidth > 769 && windowWidth <= 1000) {
      return 'mdlg'
    } else if (windowWidth > 1001 && windowWidth <= 1580) {
      return 'lg'
    } else if (windowWidth > 1581 && windowWidth <= 1280) {
      return 'xl'
    } else if (windowWidth > 1280) {
      return '2xl'
    }
  }

  // public showError = (
  //   error: CombinedError,
  //   title: string,
  //   icon: 'error-alert' | 'error-kite' | 'success-kite' | 'success-thumb',
  //   fallbackMsg = '',
  // ) => {
  //   const message = error.graphQLErrors[0].message
  //   this.sideBarInfo.errorMessage = message != 'null' ? message : fallbackMsg
  // }

  public getLabel = (data: any, key: string) => {
    const thisData = data.filter((Option: any) => {
      return Option.key == key
    })

    return thisData.length > 0 ? thisData[0].value : ''
  }

  public showLoader = (loaderSetup: LoaderSetup) => {
    this.loaderSetup = loaderSetup
  }

  public goBack = () => {
    window.history.length > 1 ? this.router?.go(-1) : this.router?.push('/')
  }

  public hideLoader = () => {
    const Loader: LoaderSetup = {
      show: false,
      useModal: false,
      loading: false,
    }
    this.loaderSetup = Loader
  }

  public globalParameters = reactive<{
    currency: string
  }>({
    currency: 'ngn',
  })

  public momentInstance = moment

  public convertToMoney = (
    float: any,
    withZeros = true,
    currencyType = 'ngn',
    withSymbol = true,
  ) => {
    let currencySymbol = ''
    if (currencyType == 'usd') {
      currencySymbol = '$'
    } else if (currencyType == 'ngn') {
      currencySymbol = '₦'
    }
    if (!withSymbol) {
      currencySymbol = ''
    }
    if (withZeros) {
      return currency(float, {
        separator: ',',
        symbol: currencySymbol,
      }).format()
    } else {
      return currencySymbol + new Intl.NumberFormat().format(parseFloat(float))
    }
  }

  private isString = (x: any) => {
    return Object.prototype.toString.call(x) === '[object String]'
  }

  public searchArray = (arr: any[], searchKey: string) => {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return this.isString(obj[key]) ? obj[key].includes(searchKey) : false
      })
    })
  }

  public debounce = (
    method = () => {
      //
    },
    delay = 500,
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (typeof window.LIT !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      clearTimeout(window.LIT)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    window.LIT = setTimeout(() => {
      method()
    }, delay)
  }

  public watchProperty = (objectToWatch: any, objectToUpdate: any) => {
    let upatedValue = (this as any)[`${objectToWatch}`]
    const watchAction = () => {
      upatedValue = (this as any)[`${objectToWatch}`]
      if (objectToUpdate) {
        objectToUpdate.value = upatedValue
      }
      this.watchInterval = window.requestAnimationFrame(watchAction)
    }

    watchAction()
  }

  public stopWatchAction = () => {
    if (this.watchInterval != undefined) {
      window.cancelAnimationFrame(this.watchInterval)
    }
  }

  private fetchFile = (url: string) => {
    return new Promise(function (resolve, reject) {
      // Get file name from url.
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = function () {
        resolve(xhr)
      }
      xhr.onerror = reject
      xhr.open('GET', url)
      xhr.send()
    }).then(function (xhr: any) {
      const filename = url.substring(url.lastIndexOf('/') + 1).split('?')[0]
      const a = document.createElement('a')
      a.href = window.URL.createObjectURL(xhr.response) // xhr.response is a blob
      a.download = filename // Set the file name.
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      return xhr
    })
  }

  public downloadFiles = (urls = []) => {
    return Promise.all(urls.map(this.fetchFile))
  }

  public fomartDate = (date: number, format: string) => {
    return moment(date).format(format)
  }

  public countDownTime = (endTime: number) => {
    return moment(moment(endTime).diff(moment.now())).format('mm:ss')
  }

  public timeFromNow = (time: number) => {
    return moment(time).fromNow()
  }

  public updatedData = (oldData: any, newData: any) => {
    if (oldData != undefined && newData != undefined) {
      return { ...oldData, ...newData }
    }
    return oldData
  }

  public preFetchRouteData = (
    routeTo: RouteLocationNormalized,
    next: NavigationGuardNext,
    _routeFrom: RouteLocationNormalized,
  ) => {
    const allActions: Promise<any>[] = []
    if (this.loaderSetup.loading) {
      return
    }

    const routeMiddlewares: any = routeTo.meta.middlewares

    // handle fetchRules

    const fetchRules: FetchRule[] = routeMiddlewares.fetchRules

    let BreakException = {}

    try {
      fetchRules?.forEach((rule) => {
        if (rule.requireAuth) {
          if (!Logic.Auth.AuthUser) {
            this.GoToRoute('/auth/login')
            throw BreakException
          }
        }
        // @ts-ignore
        const domain = Logic[rule.domain]

        if (rule.alignCurrency) {
          if (rule.params[0] != this.globalParameters.currency) {
            rule.params[0] = this.globalParameters.currency
            rule.ignoreProperty = true
          }
        }

        if (
          domain[rule.property] == undefined ||
          (typeof rule.ignoreProperty == 'function' && rule.ignoreProperty()) ||
          rule.ignoreProperty
        ) {
          allActions.push(
            new Promise((resolve) => {
              if (rule.useRouteId) {
                rule.params.unshift(routeTo.params.id.toString())
              }
              if (rule.useRouteQuery) {
                rule.queries?.forEach((item) => {
                  rule.params.unshift(routeTo.query[item])
                })
              }
              const request = domain[rule.method](...rule.params)
              request?.then((value: any) => {
                resolve(value)
              })
            }),
          )
        }
      })
    } catch (error) {
      if (error !== BreakException) throw error
    }

    // save user activities

    if (routeMiddlewares.tracking_data) {
      const trackingData: any = routeMiddlewares.tracking_data
    }

    if (allActions.length > 0) {
      this.showLoader({
        show: true,
        useModal: true,
        loading: true,
      })

      Promise.all(allActions).then(() => {
        this.hideLoader()
        return next()
      })
    } else {
      this.hideLoader()
      return next()
    }
  }
}
