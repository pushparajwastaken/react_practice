import conf from "../config/config.js";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const post = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return post;
    } catch (error) {
      throw error;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      const updatedpost = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
      return false;
    }
  }
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.appbucketId, ID.unique(), file);
    } catch (error) {
      throw error;
      return false;
    }
  }
  async deletefile(fileId) {
    try {
      return await this.databases.deletefile(conf.appbucketId, fileId);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }
  getfilePreview(fileId) {
    return this.databases.getfilePreview(conf.appbucketId, fileId);
  }
}
const service = new Service();
export default service;
