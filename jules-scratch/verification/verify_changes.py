import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Go to the homepage
        await page.goto("http://localhost:4321/")

        # Wait for the page to be ready
        await expect(page.get_by_role("heading", name="Connect Your Way")).to_be_visible()

        # Take a screenshot of the light mode
        await page.screenshot(path="jules-scratch/verification/light-mode.png", full_page=True)

        # Find and click the theme toggle button in the sidebar
        theme_toggle_btn = page.get_by_role("button", name="Toggle Theme")
        await theme_toggle_btn.click()

        # Wait for the dark class to be applied to the html element
        await expect(page.locator("html")).to_have_class("dark")

        # Take a screenshot of the dark mode
        await page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
