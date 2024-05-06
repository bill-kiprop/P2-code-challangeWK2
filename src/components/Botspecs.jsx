// BotSpecs.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BotSpecs() {
  const { botId } = useParams();
  const [botSpecs, setBotSpecs] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${botId}`)
      .then((res) => res.json())
      .then((data) => setBotSpecs(data));
  }, [botId]);

  if (!botSpecs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Bot Specs</h2>
      <p>Name: {botSpecs.name}</p>
      <p>Health: {botSpecs.health}</p>
      <p>Damage: {botSpecs.damage}</p>
      <p>Armor: {botSpecs.armor}</p>
      <p>Class: {botSpecs.bot_class}</p>
      <p>Catchphrase: {botSpecs.catchphrase}</p>
      <p>Created At: {botSpecs.created_at}</p>
      <p>Updated At: {botSpecs.updated_at}</p>
      {/* Add other specs as needed */}
    </div>
  );
}
