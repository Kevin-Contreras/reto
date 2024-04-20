'use server'
import { sql } from "@vercel/postgres";

export async function createUser(data) {
    // Accede al campo "codigo" utilizando el método get
    const codigoValue = data.get('codigo');
    console.log(codigoValue);

}