
document.addEventListener("DOMContentLoaded", function () {

    let selectedFieldValues = []; 
    let savedPairs = [];

    // Existing functionality: Populate dropdown based on uploaded CSV file
    document.getElementById("sunburst_file_input").addEventListener("change", function (event) {
        const file = event.target.files[0];
        
        // Check if the file is a CSV
        if (file && file.name.toLowerCase().endsWith('.csv')) {
            const reader = new FileReader();
            
            reader.onload = function () {
                const csvContent = reader.result;

                // Console log to display the CSV content
                

                processCSV(csvContent);
                console.log("CSV File: ", csvContent)

            };
            
            reader.readAsText(file); // Start reading the file
        } else {
            alert('Please select a CSV file.');
            // Reset the file input
            event.target.value = '';
        }
    });

    function processCSV(csvContent) {
        const rows = csvContent.split("\n").map(row => row.split(","));
        if (rows.length < 2) return; // Ensure there's data

        const headers = rows[0];
        const data = rows.slice(1);

        populateDropdown(headers, data);
    }

    function populateDropdown(headers, data) {
        const dropdown = document.getElementById("search_field");
        dropdown.innerHTML = '<option value="" disabled selected>Select a field</option>';

        headers.forEach((header, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = header.trim();
            dropdown.appendChild(option);
        });

        dropdown.addEventListener("change", function () {
            const selectedIndex = this.value;
            selectedFieldValues = getFieldData(selectedIndex, data); // Update the global array
            console.log('Selected Field Values:', selectedFieldValues); 
        });
    }

    function populate_search_value_dropdown(uniqueValues) {
        
        const element  = document.getElementById("search_value_dropdown");
        element.options.length=0; 

        for(const value of uniqueValues) {
            const option = document.createElement("option");

            option.textContent = value;
            option.value = value; 

            element.appendChild(option);
        }
    }

    function getFieldData(fieldIndex, data) {
        const values = data.map(row => {
            let cell = row[fieldIndex]; // Get the cell value at the specified column (fieldIndex)
        
            if (cell) {
                cell = cell.replace(/"/g, ""); // Remove all double quotes from the cell
                cell = cell.trim(); // Remove any leading or trailing whitespace
            } else {
                cell = ""; // Ensure cell is a string
            }
        
            return cell; // Return the cleaned cell value
        });

        // Filter out empty strings and get unique values
        const uniqueValues = [...new Set(values.filter(value => value !== ""))];
        
        populate_search_value_dropdown(uniqueValues);
        return uniqueValues;
    }    

    const keywordInput = document.getElementById("keywordInput");
    const suggestionDropdown = document.getElementById("suggestion_dropdown");

    keywordInput.addEventListener("input", function () {
        const value = keywordInput.value;
        const lastChar = value[value.length - 1];
        let userInput = value.split(',').pop().trim().toLowerCase(); // Get the last value

        suggestionDropdown.innerHTML = ""; // Clear previous suggestions

        // Determine whether to show suggestions
        if (userInput || lastChar === ',') {
            let filteredValues;

            if (userInput) {
                filteredValues = selectedFieldValues.filter(val =>
                    val.toLowerCase().startsWith(userInput)
                );
            } else {
                // If userInput is empty and lastChar is a comma, show all suggestions
                filteredValues = selectedFieldValues;
            }

            if (filteredValues.length === 0) {
                // Show "no match" if no results are found
                const noMatch = document.createElement("div");
                noMatch.textContent = "No match";
                noMatch.style.fontStyle = "italic";
                noMatch.style.color = "gray";
                noMatch.classList.add("no-match");
                suggestionDropdown.appendChild(noMatch);
            } else {
                // Show up to 10 suggestions
                filteredValues.slice(0, 10).forEach(val => {
                    const suggestion = document.createElement("div");
                    suggestion.textContent = val;
                    suggestion.addEventListener("click", function () {
                        addValueToInput(val);
                    });
                    suggestionDropdown.appendChild(suggestion);
                });
            }

            suggestionDropdown.style.display = "block"; // Show dropdown
        } else {
            suggestionDropdown.style.display = "none"; // Hide dropdown
        }
    });

    // Hide dropdown if user clicks outside
    document.addEventListener("click", function (event) {
        if (!keywordInput.contains(event.target) && !suggestionDropdown.contains(event.target)) {
            suggestionDropdown.style.display = "none";
        }
    });

    function addValueToInput(value) {
        if (value.toLowerCase() === "no match") return; // Prevent adding "No match"
        let currentValues = keywordInput.value.split(',');
        currentValues = currentValues.map(val => val.trim()); // Clean up spaces

        currentValues[currentValues.length - 1] = value;

        keywordInput.value = currentValues.filter(val => val).join(", ") + ", ";
        keywordInput.focus(); // Bring focus back to the input

        suggestionDropdown.style.display = "none"; // Hide dropdown
    }

    // New functionality: Add Filter Option and CSV Field List Pair
    document.getElementById('add_pair_button').addEventListener('click', function() {
        const searchFieldDropdown = document.getElementById('search_field');
        const csvFieldListInput = document.getElementById('keywordInput');
        const savedPairsContainer = document.getElementById('saved_pairs_container');

        const searchField = searchFieldDropdown.options[searchFieldDropdown.selectedIndex].text.trim();
        let csvFieldList = csvFieldListInput.value.trim();
        if (csvFieldList.endsWith(",")) {
            csvFieldList = csvFieldList.slice(0, -1); // Remove the trailing comma
        }


        // Check if CSV Field List contains more than 2 words separated by commas
        const csvFieldWords = csvFieldList.split(',').map(word => word.trim()).filter(word => word.length > 0);
        if (csvFieldWords.length <= 2) {
            alert('The CSV Field List must contain more than 2 words separated by commas.');
            return; // Stop execution if validation fails
        }

        if (searchField && csvFieldList) {
            // Save the pair
            const pair = { searchField, csvFieldList };
            savedPairs.push(pair);

            // Create a checkbox for the pair
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'selected_pairs';
            checkbox.value = JSON.stringify(pair);
            checkbox.checked = true;

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${searchField} - ${csvFieldList}`));

            const div = document.createElement('div');
            div.appendChild(label);

            savedPairsContainer.appendChild(div);

            // Clear the input field for CSV Field List
            csvFieldListInput.value = '';
        } else {
            alert('Please select a Search Field and enter a CSV Field List.');
        }
    });

    // Handle form submission to include saved pairs and validate file selection
    document.querySelector('form').addEventListener('submit', function(event) {
        // Validate that a file is selected and it's a CSV
        const fileInput = document.getElementById('sunburst_file_input');
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select a CSV file before submitting the form.');
            event.preventDefault(); // Prevent form submission
            return;
        } else if (!file.name.toLowerCase().endsWith('.csv')) {
            alert('The selected file must be a CSV.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Gather selected pairs
        const checkboxes = document.getElementsByName('selected_pairs');
        const selectedPairs = [];
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                selectedPairs.push(JSON.parse(checkbox.value));
            }
        }
        const selectedPairsData = JSON.stringify(selectedPairs);

        console.log('Selected Pairs:', selectedPairs);
        console.log('Selected Pairs Data:', selectedPairsData);

        // Create a hidden input to store the selected pairs
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'selected_pairs_data';
        hiddenInput.value = selectedPairsData;
        console.log("Selected Pairs: ", selectedPairsData)
        this.appendChild(hiddenInput);
    });

});
