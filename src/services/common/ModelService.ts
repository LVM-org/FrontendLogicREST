import { ReadOnlyApiService } from "./ReadOnlyService";
import axios, { AxiosResponse } from 'axios'

export class ModelApiService extends ReadOnlyApiService {
	constructor(resource: string) {
	  super(resource);
	}

	public async post(data = {}) {
	  try {

        const response: AxiosResponse  = await this.axiosInstance.post(this.getUrl(),data);

		return response

	  } catch (err) {

		this.handleErrors(err);
	  }
	}


	public async put(id: string, data = {}) {
	  if (!id) throw Error("Id is not provided");

	  try {

        const response: AxiosResponse  = await this.axiosInstance.put(this.getUrl(id),data);

		return response


	  } catch (err) {
		this.handleErrors(err);
	  }
	}

	public async delete(id: string | undefined) {

	  if (!id) throw Error("Id is not provided");
	  try {

        await this.axiosInstance.delete(this.getUrl(id));

		return true;
	  } catch (err) {
		this.handleErrors(err);
	  }

	}
  }
