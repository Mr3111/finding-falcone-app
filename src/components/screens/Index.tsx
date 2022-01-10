import Head from '@commons/Head'
import Navbar from "@commons/Navbar";
import Footer from "@commons/Footer";
import Body from '@commons/Body';

function Index() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head title="Terra" />
             <Navbar  />
              <Body />
            <Footer />
        </div>
    )
}

export default Index;
