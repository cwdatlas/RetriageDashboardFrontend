export const dynamic = 'force-static'
import { Event } from "./../models/event";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

/**
 * Create a new event
 */
export async function createEvent(event: Omit<Event, "id">): Promise<Event> {
    const res = await fetch(`${API_BASE_URL}/event`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    });

    if (!res.ok) {
        throw new Error(`Failed to create event: ${res.statusText}`);
    }
    return res.json();
}

/**
 * Optionally, get a single event by ID
 */
export async function getEventById(): Promise<Event> {
    const res = await fetch(`${API_BASE_URL}/event`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch event`);
    }
    return res.json();
}

/**
 * Optionally, delete a event
 */
export async function deleteEvent(id: number): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/events`, {
        method: "DELETE",
    });
    if (!res.ok) {
        throw new Error(`Failed to delete event`);
    }
}

