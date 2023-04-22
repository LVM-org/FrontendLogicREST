import { AxiosResponse } from "axios";
import { BaseApiService } from "./BaseService";


export class ReadOnlyApiService extends BaseApiService {

	constructor(resource: string) {
	  super(resource);
	}

	public async fetch(query = '') {
	  try {

        const response: AxiosResponse  = await this.axiosInstance.get(this.getUrl() + query);

		return response

	  } catch (err) {
		this.handleErrors(err);
	  }
	}

	public async get(id: string) {
	  try {
		if (!id) throw Error("Id is not provided");

		const response: AxiosResponse  = await this.axiosInstance.get(this.getUrl('id/' + id));

		return response

	  } catch (err) {
		this.handleErrors(err);
	  }
	}


    public async search(query: string) {
        try {
          if (!query) throw Error("query is not provided");

          const response: AxiosResponse  = await this.axiosInstance.get(this.getUrl() + '?q=' + query);

		  return response

        } catch (err) {
          this.handleErrors(err);
        }
      }

}
