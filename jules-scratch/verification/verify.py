from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))

        page.goto("http://localhost:5174/")

        # Wait for the heading to be visible
        heading = page.get_by_role("heading", name="Choose Your Experience")
        expect(heading).to_be_visible(timeout=10000)

        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

run()
