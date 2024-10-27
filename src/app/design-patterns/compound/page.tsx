"use client"
import DropdownMenu from "@/DesignPatterns/Compound";
import { NextPage } from "next";


const Compound: NextPage = () => {

    return (
        <DropdownMenu>
            <DropdownMenu.Toggle />
            <DropdownMenu.List>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.List>
        </DropdownMenu>
    )
}

export default Compound