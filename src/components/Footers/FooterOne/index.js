import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Container from "../../Container"
import Button from "../../cta";

const FooterOne = () => {

    const location = typeof window !== 'undefined' ? window.location.href : '';
    console.log(location)
    const data = useStaticQuery(
        graphql`
        query FooterQuery {
            wpMenu(locations: {eq: FOOTER}) {
              menuItems {
                nodes {
                  label
                  uri
                  childItems {
                    nodes {
                      label
                      uri
                    }
                  }
                }
              }
            }
          }          
        `
    )

    const menu = data.wpMenu.menuItems

    return(
        <>
        <div className="w-full py-16 bg-lightGray">
            {!location?.includes('contact') ?
            <Container styles={`flex flex-row justify-between items-center`}>
                <div className="w-2/3 flex">
                    <span className="text-5xl mr-8">👋</span>
                    <h3 className="text-5xl font-bold">Benieuwd wat we voor jou kunnen betekenen?</h3>
                </div>
                <div className="w-1/3 flex flex-row justify-end">
                    <Button target={'/contact'}>Neem contact op</Button>
                </div>
            </Container>
            :
            <div class="bg-white shadow-xl rounded-2xl w-1/3 mx-auto">
                <div class="p-6 sm:p-10">
                    <form action="#" method="POST" class="space-y-6">
                        <div>
                            <label for="fullName" class="text-base font-medium text-gray-900"> Jouw naam </label>
                            <div class="mt-2">
                                <input type="text" name="fullName" id="fullName" placeholder="Vul je volledige naam in" class="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-midGray rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="email" class="text-base font-medium text-gray-900"> Jouw E-mailadres </label>
                            <div class="mt-2">
                                <input type="email" name="email" id="email" placeholder="Vul je e-mailadres in" class="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-midGray rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="message" class="text-base font-medium text-gray-900"> Jouw bericht </label>
                            <div class="mt-2">
                                <textarea
                                    name="email"
                                    id="email"
                                    placeholder="Schrijf hier je bericht"
                                    rows="4"
                                    class="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-midGray resize-y rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-green border border-transparent rounded-xl hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                        >
                            Versturen
                        </button>
                    </form>
                </div>
            </div>
            }
        </div>
        <div className="w-full py-24 bg-gray">
            <Container styles={`flex flex-row justify-between text-white`}>
                {
                    menu.nodes?.map((m)=>{
                        if(m.childItems.nodes.length !== 0){
                        return(    
                            <div>
                            {m.uri !== '#' ?
                            <Link to={m.uri}><h4 className="text-xl font-bold ">{m.label}</h4></Link>
                            :
                            <h4 className="text-xl font-bold ">{m.label}</h4>
                            }
                                <ul className="pt-5">
                                {
                                    m.childItems.nodes?.map((c)=>{
                                        return(
                                        <Link to={c.uri}>
                                            <li className="my-5 font-light">{c.label}</li>
                                        </Link>
                                        )
                                    })
                                }
                                </ul>
                            </div>   
                        )
                        }

                    })
                }
                <div className="w-1/4">
                    <h4 className="text-xl font-bold ">Blijf op de hoogte</h4>
                    <form className="w-full flex flex-col">
                        <input type="text" className="p-4 rounded-lg mt-10 text-text" placeholder="Vul je e-mailadres in"></input>
                        <input type="submit" className="p-4 mt-3 rounded-lg bg-green text-white cursor-pointer" value="Meld je aan"></input>
                    </form>
                </div>
            </Container>
        </div>
        <div className="w-full bg-gray">
            <Container styles={'border-t border-black py-8'}>
                <div className="text-midGray text-sm flex flex-row justify-between">
                    <span>&copy; Copyright {new Date().getFullYear()}, Alle rechten voorbehouden</span>
                    <span>Webdesign: <a href="https://hq-online.nl/" target={"_blank"}>HQ Online</a></span>
                    <div><ul><li></li></ul></div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default FooterOne;