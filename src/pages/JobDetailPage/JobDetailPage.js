import React from "react"
import { BASE_URL, headers } from '../../constants/urls'
import axios from "axios"
import { convertDate } from '../../utils/convertDate'
import { JobDetailContainer } from "./styled"
import Button  from "@material-ui/core/Button"
import Footer from "./../../components/Footer/Footer"

class JobDetailPage extends React.Component {
    state = {
        job: {}
    }

    componentDidMount() {
        this.getJob()
    }

    getJob = () => {
        axios.get(`${BASE_URL}/jobs/${this.props.jobId}`, headers)
            .then((res) => {
                this.setState({ job: res.data })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    render() {
        const paymentComponents = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pay) => {
            return <li key={pay}>{pay}</li>
        })

        return (
            <JobDetailContainer>
                {
                    this.state.job.title && <h1>{this.state.job.title}</h1>
                }
                {
                    this.state.job.price && <p><b>Preço:</b> R${this.state.job.price.toFixed(2)}</p>
                }
                {
                    this.state.job.dueDate && <p><b>Prazo:</b> {convertDate(this.state.job.dueDate)}</p>
                }
                {
                    this.state.job.description && <p><b>{this.state.job.description}</b></p>
                }
                <div>
                    {paymentComponents}
                </div>
                <Button variant="contained" onClick={() => this.props.changePage("list")}>Voltar para a Lista</Button>

               <Footer />
            </JobDetailContainer>
        )
    }
}

export default JobDetailPage