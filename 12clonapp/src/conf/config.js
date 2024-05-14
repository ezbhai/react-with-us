const config = {
    appwriteURL : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collactionId : String(import.meta.VITE_APPWRITE_COLLACTION_ID),
    bucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default config