# TeleSitePromoWebUI

## Description
TelegramBoost is a tool designed to help promote your website by connecting it with your Telegram channel. This tool provides functionality to seamlessly integrate your website with your Telegram channel, allowing you to easily share updates, news, and content with your audience on Telegram.

## Features
- Connect your website to your Telegram channel.
- Automatically share website updates on your Telegram channel.
- Customize the content shared on Telegram.
- Easy setup and configuration.

## Getting Started
To get started with TelegramBoost, follow these steps:
1. Clone this repository to your local machine.
2. Install the required dependencies.
3. Configure the settings according to your Telegram channel and website.
4. Run the application.

## Usage
1. Configure your Telegram Bot and obtain the Bot Token.
2. Set up the necessary permissions for the Bot to access your Telegram channel.
3. Configure the webhook URL for your Telegram Bot.
4. Customize the message format and content according to your preferences.
5. Run the application to start sharing updates from your website to your Telegram channel.

## Configuration
The configuration for TelegramBoost can be found in the `config.json` file. Here, you can specify the Bot Token, Telegram channel ID, webhook URL, and customize the message format.

```json
{
  "telegram": {
    "bot_token": "YOUR_BOT_TOKEN",
    "channel_id": "YOUR_CHANNEL_ID",
    "webhook_url": "YOUR_WEBHOOK_URL"
  },
  "message": {
    "format": "New post on our website: [Title](URL)"
  }
}
