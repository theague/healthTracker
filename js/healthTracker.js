fetch('https://spreadsheets.google.com/feeds/list/1BxTo-U2IEBkA2wGKKC9uk5o01k0nj2_xWGadyIeNeZE/od6/public/values?alt=json')
    .then(resp => resp.json())
    .then(data => console.log(data));