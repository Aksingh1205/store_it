'use server'

import { createAdminClient } from "../appwrite";
import { InputFile } from "node-appwrite/file";
import { appwriteConfig } from "../appwrite/config";
import { ID } from "node-appwrite";

const handleError = (error : unknown, message : string) => {
    console.error(error, message);
    throw error;
}

export const uploadFile = async ({file, ownerId, accountId, path}: UploadFileProps) => {
    const {storage, databases} = await createAdminClient();

    try {
        const inputFile = InputFile.fromBuffer(file, file.name);

        const bucketFile = await storage.createFile(
            appwriteConfig.bucketId,
            ID.unique(),
            inputFile
        );
    } catch (error) {
        handleError(error, "Failed to upload file");
    }

}