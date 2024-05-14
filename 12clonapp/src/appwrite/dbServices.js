import config from "../conf/config";
import {Client,Databases,Storage,Query,ID} from "appwrite"

export class Service{
    client = new Client();
    databases;
    storage;
    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.projectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }
    async createPost({title,slug,Image,content,status,userId}){
        try {
            return await this.databases.createDocument(
                config.databaseId,
                config.collactionId,
                slug,
                {
                    title,
                    Image,
                    content,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,Image,content,status}){
        try {
            return await this.databases.updateDocument(
                config.databaseId,
                config.collactionId,
                slug,
                {
                    title,
                    Image,
                    content,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.databaseId,
                config.collactionId,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false
        }   
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.databaseId,
                config.collactionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPosts(queris = [Query.equal("status","active")  ]){
        try {
            return await this.databases.listDocuments(
                config.databaseId,
                config.collactionId,
                
            )
        } catch (error) {
            
        }
    }

    // upload files functions 

    async uploadeFile(file){
        try {
            return await this.storage.createFile(
                config.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.bucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
       }
}

const service = Service()

export default service

