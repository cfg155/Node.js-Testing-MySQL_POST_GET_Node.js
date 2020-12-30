function getData() {
    fetch('http://localhost:3000/getData')
        .then(res => res.json())
        .then(res => {
            let output = ''
            res.forEach(data => {
                output +=
                `
                    <div class="data-item">
                        <h4>ID : ${data.id}</h4>
                        <h5>Product : ${data.product}</h5>
                    </div>
                `
            })
            document.querySelector('.view-data').innerHTML = output
        })
}

getData()