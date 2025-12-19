import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/shared/lib/theme-provider"

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "light") return <Sun className="w-5 h-5" />
    if (theme === "dark") return <Moon className="w-5 h-5" />
    return <Sun className="w-5 h-5" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex justify-center items-center p-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      aria-label="Toggle theme"
    >
      {getIcon()}
    </button>
  )
}

