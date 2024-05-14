import config from "../conf/config";
import {Client,Account,ID} from "appwrite"

export class Authservice{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.projectId);
        this.account = new Account(this.client);
    }
    
    async createAccount({name,email,password}){
        try {
           const userAccount =  await this.account.create(ID.unique(),name,email,password)
           if(userAccount){
            return this.login({email,password})
           }else{
                return userAccount;
           }
        } catch (error) {
            console.log("appwrite servies :: createPost :: error",error)
        }
    }

    async login({password,email}){
        try {
          return await this.account.createEmailSession(password,email)
        } catch (error) {
            console.log("appwrite servies :: createPost :: error",error)
        }
    }

    async getCurrentuser(){
        try {
           return await this.account.get()
        } catch (error) {
            console.log("appwrite servies :: createPost :: error",error)
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite servies :: createPost :: error",error)
        }
    }

}

const authservice = new Authservice()

export default authservice;


