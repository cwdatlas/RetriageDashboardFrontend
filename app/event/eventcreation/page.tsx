"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createEvent } from "@/app/api/eventApi";
import { getUserById } from "@/app/api/userApi";
import {Resource} from "@/app/models/resource"
// ^ Adjust the import path to wherever your patientsApi.ts file lives

export default function EventCreation() {
    const router = useRouter();
    const [name, setName] = useState("");
    const director = getUserById(1);
    const [resources, setResources] = useState<Array<Array<Resource>>>([]);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            await createEvent({ name, director, resources });
            // After creation, navigate to the /patients page:
            router.push("/");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || "An error occurred");
            } else {
                setError("An unknown error occurred");
            }
        }
    }

    return (
        <div>
            <h1>Create a New Event</h1>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status: </label>
                    <input
                        type="text"
                        value={resources}
                        onChange={(e) => setResources(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}
