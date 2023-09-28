const enviarMail3 = document.getElementById("enviarMail");
const $form = document.querySelector("#form")

enviarMail3.addEventListener("click", () => {
    $form.addEventListener("submit", handleSubmit)
    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData($form)
        const response = await fetch($form.action, {
            method: $form.method,
            body: form,
            headers: {
                "Accept": "application/json"
            }
        })
        //mensaje que sale cuando se presiona enviar
        if (response.ok) {
            $form.reset();
            Swal.fire({
                customClass: {
                    popup: 'popup-class'
                },
                title: 'Gracias por escribirme. Pronto me pondré en contacto',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                background: "#F6C667",
                color: "black",
                confirmButtonColor: "#05121b",
            })
        }
    }
});