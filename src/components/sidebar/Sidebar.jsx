// Sidebar.js
import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // Style the sidebar as needed

const Sidebar = ({ apiUrl }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch items from API when component mounts
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchItems();
    }, [apiUrl]);

    if (loading) {
        return <div className="sidebar">Loading...</div>;
    }

    if (error) {
        return <div className="sidebar">Error: {error}</div>;
    }

    return (
        <div className="sidebar">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                    ))}
            </ul>
        </div>
    );
};

export default Sidebar;
