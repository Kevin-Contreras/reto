'use client'
import { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { createUser } from './server/server';

export default function Example() {
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(false);

  const handleCreateRoom = (e) => {
    e.preventDefault();
   
  };

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (roomCode.trim() !== "") {
      // Aquí puedes agregar lógica adicional para unirte a una sala existente
    }
  };

  return (
    <div className="bg-dark">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Otros elementos del diseño */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
             ZIRTY
            </h1>
            <p className="mt-6 text-lg leading-8 text-white-600">
              Ganale a tus amigos en las preguntas.
            </p>
            <form  action={createUser}className="flex flex-col items-center justify-center">
              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                  type="text"
                  name='usuario'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  variant="bordered"
                  label="INGRESE EL USUARIO"
                />
                {!joinedRoom && (
                  <Input
                    type="text"
                    name='codigo'
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    variant="bordered"
                    label="INGRESE EL CODIGO"
                  />
                )}
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  type="submit"
                 
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  CREAR SALA
                </Button>
                <Button
                  onClick={() => setJoinedRoom(true)}
                  className="text-sm font-semibold leading-6 text-white-900"
                >
                  UNIRME A UNA <span aria-hidden="true">→</span>
                </Button>
                {roomCode.trim() !== "" && (
                  <Button
                    onClick={handleJoinRoom}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Entrar
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
        {/* Otros elementos del diseño */}
      </div>
    </div>
  );
}
