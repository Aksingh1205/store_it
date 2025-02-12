'use server';

import { ID, Query } from "node-appwrite";
import { appwriteConfig } from "../appwrite/config";
import { createAdminClient } from "../appwrite";

const getUserByEmail = async(email: string) => {
    const {databases} = await createAdminClient();

    const result = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal("email", [email])],
    );

    return result.total > 0 ? result.documents[0] : null;
}

const sendEmailOTP = async({email} : {email: string}) => {
    const {account} = await createAdminClient();

    try {
        const session = await account.createEmailToken(ID.unique(), email);

        return session.userId;
    } catch (error) {
        
    }
}

const createAccount = async({fullName, email} : {fullName: string; email: string;}) => {
    const existingUser = await getUserByEmail(email);

    const accountId = await sendEmailOTP({email});
}