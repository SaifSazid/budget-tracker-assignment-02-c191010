import AddIncomeExpense from "./components/AddIncomeExpense/AddIncomeExpense"
import BudgetSection from "./components/Header/BudgetSection"
import Navbar from "./components/Header/Navbar"
import IncomeExpenseList from "./components/IncomeExpenseList/IncomeExpenseList"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <BudgetSection></BudgetSection>
      <AddIncomeExpense></AddIncomeExpense>
      <IncomeExpenseList></IncomeExpenseList>
    </>
  )
}

export default App
