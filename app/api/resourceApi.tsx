export const dynamic = 'force-static'
import { Resource } from "./../models/resource";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

/**
 * Fetch all resources from the backend
 */
export async function getAllResources(): Promise<Resource[]> {
    const res = await fetch(`${API_BASE_URL}/resources`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch resources: ${res.statusText}`);
    }
    return res.json();
}

/**
 * Create a new resource
 */
export async function createResource(Resource: Omit<Resource, "id">): Promise<Resource> {
    const res = await fetch(`${API_BASE_URL}/Resource`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Resource),
    });

    if (!res.ok) {
        throw new Error(`Failed to create resource: ${res.statusText}`);
    }
    return res.json();
}

/**
 * Optionally, get a single resource by ID
 */
export async function getResourceById(id: number): Promise<Resource> {
    const res = await fetch(`${API_BASE_URL}/resources/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch resource with ID ${id}`);
    }
    return res.json();
}

/**
 * Optionally, delete a resource
 */
export async function deleteResource(id: number): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/resources/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) {
        throw new Error(`Failed to delete resource with ID ${id}`);
    }
}

