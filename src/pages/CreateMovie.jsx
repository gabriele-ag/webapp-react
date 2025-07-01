import {useState, useEffect} from "react"
import axios from "axios"

const CreateMovie = () => {

    const [formData, setFormData] = useState(emptyReview)
    
    const emptyMovie = {
        title: "",
        director: "",
        abstract: "",
    }
    

    const setFieldValue = (event) => {

        const { value, name } = event.target

        setFormData = {
            ...formData,
            [name]: value,
        }


    }

    // const handleFormChange = (event) => {
    //     event.preventDefault()
    //     axios.post(, formData)
    // }


    return (
        <main className="container py-5">
            <h1>Aggiungi un film</h1>
            <div className="col-12 col-md-8 col-xl-6">
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Titolo</label>
                        <input className="form-control" type="text" id="title" name="title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Director</label>
                        <input className="form-control" type="text" id="director" name="director" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Descrizione</label>
                        <textarea className="form-control" type="text" id="director" name="director" />
                    </div>

                </form>
            </div>
        </main>
    )
}

export default CreateMovie