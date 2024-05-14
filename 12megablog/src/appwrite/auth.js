import conf from '../conf/conf'
import {Client,Account,ID} from "appwrite"

export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
           const userAccount =  await this.account.create(ID.unique(),email,password,name)
           if(userAccount){
            return this.login
           }else{
            return userAccount
           }
        } catch (error) {
            throw error
        }
    }
    async login({email,password}){
        try {
           return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return this.account.get()
        } catch (error) {
            throw error
        }
        return null;
    }
    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authservice = new Authservice()

export default authservice

// import { Client, Account , ID} from 'appwrite';

// const client = new Client()
//     .setEndpoint('')
//     .setProject('')

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com',
//     'password'
// )