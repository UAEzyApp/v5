'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [textSize, setTextSize] = useState('medium')
  const [language, setLanguage] = useState('english')

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('userSettings')
    if (savedSettings) {
      const { darkMode, textSize, language } = JSON.parse(savedSettings)
      setDarkMode(darkMode)
      setTextSize(textSize)
      setLanguage(language)
    }
  }, [])

  const handleSave = () => {
    // Save settings to localStorage
    localStorage.setItem('userSettings', JSON.stringify({ darkMode, textSize, language }))
    // Apply settings
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.fontSize = textSize === 'small' ? '14px' : textSize === 'large' ? '18px' : '16px'
    // In a real app, you'd handle language change here
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <div>
            <label htmlFor="textSize" className="block text-sm font-medium text-gray-700 mb-1">Text Size</label>
            <Select value={textSize} onValueChange={setTextSize}>
              <SelectTrigger id="textSize">
                <SelectValue placeholder="Select text size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">Language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="arabic">Arabic</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSave} className="bg-gold hover:bg-gold/80 text-white">
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

