import HeaderBox from '@/components/ui/headerBox'
import React from 'react'
import TotalBalanceBox from '@/components/ui/totalBalanceBox'
const Home = () => {
  const loggedIn = { first_name: "God'swill" }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.first_name || "guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home