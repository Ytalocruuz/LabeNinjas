import React from "react";
import HomePage from './pages/HomePages/HomePage';
import JobsListPage from './pages/JobsListPage/JobListPage';
import CreateJobPage from './pages/CreateJobPage/CreateJobPage';
import CartPage from "./pages/CartPage/CartPage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage";
import Header from "./components/Header/Header";
import GlobalStyles from "./globalStyles/GlobalStyles";


class App extends React.Component {

  state = {
    currentPage: "home",
    jobDetailId: ""
  }

  changePage = (pageName) => {
    this.setState({currentPage: pageName})

  }

  goToDetailPage = (jobId) => {
    this.setState({currentPage: "detail", jobDetailId: jobId})

  }

  choosePage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <HomePage changePage={this.changePage} />
      case "list":
        return <JobsListPage goToDetailPage={this.goToDetailPage} />
      case "form":
        return <CreateJobPage />
      case "cart":
        return <CartPage />
      case "defaul":
        return <JobDetailPage jobI={this.state.jobDetailId}  />
      default:
        return <HomePage changePage={this.changePage} />
    }
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Header changePage={this.changePage} />
        {this.choosePage()}
      </div>
    )
  }
}


export default App

