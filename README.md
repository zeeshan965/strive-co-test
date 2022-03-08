# Developer test

Thank you for taking the time to review this test. It's intended to be short, and focuses on some
of the core technologies we use day-to-day.

Please imagine this form represents a real feature, and assume that 3rd-party services are being used for the mail-sending.

## Set-up

- Clone the repo
- Install npm dependencies
- Install composer dependencies
- Serve the application `http://127.0.0.1:8000`
- Compile the assets using `npx mix`

## Requirements

The form is incomplete, and will have errors when trying to compile. It is required to do the following:

- Fix the TS errors.
- It should accept multiple sets of [ name, color ] data.
- The `Add another set` button should add a new row.
- The `Delete set` button should remove that row.
- The data should be validated according to the following rules:</span>
  - There should be at least 2 sets of [ name, color ]
  - In each set, both name, and color are required
  - <code>name</code> is a string
  - <code>color</code> is a hex color value, such as <code>#f7ed37</code>   
- It should store the data in a database (any driver is fine).
- It should mail the data using the provided Mail class, and should be treated as if sent via a 3rd-party service.

## On completion

Please either commit your completed test to your own repository and invite `leon@striive.co` as a collaborator, or provide the complete codebase another way. 
