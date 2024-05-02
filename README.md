# Frequency Craft

Frequency distribution and graph generator | [Live Demo](#TO-DO)

![FrequencyCraft](https://socialify.git.ci/SharafatKarim/FrequencyCraft/image?description=1&descriptionEditable=Frequency%20Craft%20is%20a%20web%20application%20that%20allows%20users%20to%20generate%20frequency%20distributions%20and%20corresponding%20graphs%20based%20on%20input%20data.&font=Bitter&forks=1&issues=1&language=1&name=1&pattern=Formal%20Invitation&pulls=1&stargazers=1&theme=Auto)

Frequency Craft is a web application that allows users to generate frequency distributions and corresponding graphs based on input data. It provides a simple interface to input data, analyze it, and visualize the frequency distribution using various types of charts like bar charts, line charts, pie charts, doughnut charts, polar area charts, and radar charts.

## Features

- Input Data: Users can input their frequency data directly into the web application. The input supports multiple rows of frequency data, making it suitable for analyzing various datasets.

- Frequency Distribution: Frequency Craft calculates the frequency distribution of the input data using the Sturges formula to determine the number of classes. It then displays the frequency distribution table, showing class intervals, frequencies, and cumulative frequencies.

- Graph Generation: Based on the frequency distribution, Frequency Craft generates interactive charts using Chart.js. Users can choose from various chart types like bar charts, line charts, pie charts, doughnut charts, polar area charts, and radar charts to visualize the data.

## Installation

To run Frequency Craft locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/SharafatKarim/FrequencyCraft
   ```

2. Navigate to the project directory:

   ```bash
    cd FrequencyCraft
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

Check the console for the URL of the local server and open it in your browser.

## Usage

1. Input Data: Enter the frequency data in the input field. Each row should contain a class interval and its corresponding frequency separated by a comma. For example:

```text
32 27 19 40 31 17 15 18 21 27 38 15 33 34 29 26 16 25 33 36 24 22 26 19 36 18 25 20 25 25 31 24 16 28 30 24 29 42 29 28 26 27 47 43 22 25 28 22 24 23
```

2. Generate Frequency Distribution: Click the "Analyze data" button to calculate the frequency distribution based on the input data. The frequency distribution table will be displayed below the input field.

## Contributors

[![SharafatKarim's Profilator](https://profilator.deno.dev/SharafatKarim?v=1.0.0.alpha.4)](https://github.com/SharafatKarim)
[![sr-tamim's Profilator](https://profilator.deno.dev/sr-tamim?v=1.0.0.alpha.4)](https://github.com/sr-tamim)

Feel free to contribute to this project by creating a pull request or submitting an issue.

## License

This project is licensed under the [MIT](LICENSE) and [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) license.
