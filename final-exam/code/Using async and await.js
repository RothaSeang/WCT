function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Student Name: Seang Rotha'), 1000);
    });
}

async function fetchAndProcessData() {
    try {
        console.log('Student Name: Seang Rotha');
        console.log('Using async/await:');
        const data = await fetchData();
        console.log(data);
        const processed = 'Processing data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();