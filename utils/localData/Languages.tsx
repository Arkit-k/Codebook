import { v4 as uuidv4 } from "uuid";

import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiElixir,
  SiGo,
  SiHaskell,
  SiJavascript,
  SiKotlin,
  SiPerl,
  SiPhp,
  SiPython,
  SiR,
  SiRuby,
  SiRust,
  SiScala,
  SiShell,
  SiSwift,
  SiTypescript,
} from "react-icons/si";

export const allLanguages = [
  {
    id: uuidv4(),
    name: "Javascript",
    icon: <SiJavascript size={15} />,
  },
  {
    id: uuidv4(),
    name: "Python",
    icon: <SiPython size={15} />,
  },
  {
    id: uuidv4(),
    name: "C#",
    icon: <SiCsharp size={15} />,
  },
  {
    id: uuidv4(),
    name: "Ruby",
    icon: <SiRuby size={15} />,
  },
  {
    id: uuidv4(),
    name: "PHP",
    icon: <SiPhp size={15} />,
  },

  {
    id: uuidv4(),
    name: "Swift",
    icon: <SiSwift size={15} />,
  },
  {
    id: uuidv4(),
    name: "Golang",
    icon: <SiGo size={15} />,
  },
  {
    id: uuidv4(),
    name: "Kotlin",
    icon: <SiKotlin size={15} />,
  },
  {
    id: uuidv4(),
    name: "Rust",
    icon: <SiRust size={15} />,
  },
  {
    id: uuidv4(),
    name: "Typescript",
    icon: <SiTypescript size={15} />,
  },
  {
    id: uuidv4(),
    name: "Scala",
    icon: <SiScala size={15} />,
  },
  {
    id: uuidv4(),
    name: "R",
    icon: <SiR size={15} />,
  },
  {
    id: uuidv4(),
    name: "Haskell",
    icon: <SiHaskell size={15} />,
  },
  {
    id: uuidv4(),
    name: "Perl",
    icon: <SiPerl size={15} />,
  },
  {
    id: uuidv4(),
    name: "Elixr",
    icon: <SiElixir size={15} />,
  },
  {
    id: uuidv4(),
    name: "C++",
    icon: <SiCplusplus size={15} />,
  },
  {
    id: uuidv4(),
    name: "C",
    icon: <SiC size={15} />,
  },
  {
    id: uuidv4(),
    name: "Shell",
    icon: <SiShell size={15} />,
  },
];

export function getLanguageIcon(language: string | undefined) {
  const icon = allLanguages.find((item) => item.name === language);
  return icon?.icon;
}
