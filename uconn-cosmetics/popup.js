// Initialize the database on popup load
chrome.storage.local.get('urlDatabase', (data) => {
  if (data.urlDatabase) {
    window.urlDatabase = data.urlDatabase;
    displayKeyValuePairs();
  } else {
    window.urlDatabase = {}; // Initialize empty database if not present
  }
});

// Add a new key-value pair to the urlDatabas
document.getElementById('addPair').addEventListener('click', () => {
  const keyUrl = document.getElementById('keyUrl').value;
  const valueUrl = document.getElementById('valueUrl').value;

  if (keyUrl && valueUrl) {
    // Add to the urlDatabase
    window.urlDatabase[keyUrl] = valueUrl;

    // Save the updated urlDatabase to storage
    chrome.storage.local.set({ urlDatabase: window.urlDatabase }, () => {
      document.getElementById('statusMessage').textContent = "Pair added successfully.";
      displayKeyValuePairs();  // Refresh the list
      injectImageReplacement();  // Trigger image replacement
    });
  } else {
    document.getElementById('statusMessage').textContent = "Please enter both URLs.";
  }
});

// Display all the key-value pairs in the popup
function displayKeyValuePairs() {
  const keyValueList = document.getElementById('keyValueList');
  keyValueList.innerHTML = '';  // Clear existing list

  for (const keyUrl in window.urlDatabase) {
    const valueUrl = window.urlDatabase[keyUrl];

    // Create a list item for each pair
    const listItem = document.createElement('li');
    listItem.textContent = `${keyUrl} → ${valueUrl}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => deletePair(keyUrl));

    listItem.appendChild(deleteButton);
    keyValueList.appendChild(listItem);
  }
}

// Delete a key-value pair from the urlDatabase
function deletePair(keyUrl) {
  delete window.urlDatabase[keyUrl];

  // Save the updated urlDatabase to storage
  chrome.storage.local.set({ urlDatabase: window.urlDatabase }, () => {
    displayKeyValuePairs();  // Refresh the list
    injectImageReplacement();  // Trigger image replacement
  });
}

// Inject the image replacement functionality (your original code)
function injectImageReplacement() {
  const urlDatabase = window.urlDatabase;

  const style = document.createElement('style');
  let cssContent = '';

  // Loop through each URL in the database and create a CSS rule to replace it
  for (const originalUrl in urlDatabase) {
    const newUrl = urlDatabase[originalUrl];
    cssContent += `.course-banner[style*="url('${originalUrl}')"] {
      background-image: url('${newUrl}') !important;
    }`;
  }

  style.textContent = cssContent;
  document.head.appendChild(style);
}

function updateDropdown(options) {
    const dropdown = document.getElementById('classDropdown');
    dropdown.innerHTML = ''; // Clear existing options
  
    options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.textContent = option.text;
      dropdown.appendChild(opt);
    });
  }
  
  // Example usage:
  const class_name_list = [
    { value: 'replace', text: '1253-UCONN-CHEM-1127Q-SEC002-3376' },
    { value: 'append', text: 'CSE-2500-Introduction to Discrete Systems-SEC003-1253' },
    { value: 'prepend', text: 'Prepend' },
    { value: 'remove', text: 'Remove' }
  ];
  

  

// Trigger image replacement when the page is loaded
window.addEventListener('load', () => {
  injectImageReplacement();
  updateDropdown(class_name_list);

});