// pages/patients/page.tsx
'use client'
import React, { useEffect, useState } from "react";
import { getAllPatients } from "./api/patientsApi";
import { Patient } from "./models/patient";

export default function PatientsList() {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const data = await getAllPatients();
                setPatients(data);
            } catch (err: unknown) {
                // err is 'unknown' — we need to check its type before using it
                if (err instanceof Error) {
                    setError(err.message || "An error occurred");
                } else {
                    setError("An unknown error occurred");
                }
            }
        };
        fetchPatients();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Patients List</h1>
            {patients.length === 0 ? (
                <p>No patients found.</p>
            ) : (
                <ul>
                    {patients.map((patient) => (
                        <li key={patient.id}>
                            {patient.id}: {patient.firstName} {patient.lastName} ({patient.status})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
