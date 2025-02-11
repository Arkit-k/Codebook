import { Pencil2Icon, RocketIcon} from "@radix-ui/react-icons";
import {Handshake} from "lucide-react";

export const features = [
    {
        title: "Save Your Snippets",
        description: "Store your frequently used code with ease.",
        icon: <RocketIcon className="w-6 h-6"/>,
    },
    {
        title: "Search for snippets instantly using keywords.",
        description: "Find your snippets quickly with smart organization.",
        icon: <Pencil2Icon className="w-6 h-6"/>,
    },
    {
        title: "Powerful Search",
        description: "Search for snippets instantly using keywords.",
        icon: <Handshake className="w-6 h-6"/>,
    },
];