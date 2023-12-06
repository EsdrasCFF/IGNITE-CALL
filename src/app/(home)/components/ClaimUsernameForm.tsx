"use client"

import { Box, Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";

export function ClaimUsernameForm () {
  return (
    <form className="grid grid-cols-[1fr,auto] gap-2" >
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario"/>

      <Button size='sm' type='submit'>
        Reservar 
        <ArrowRight/>
      </Button>
    </form>
  );
}
