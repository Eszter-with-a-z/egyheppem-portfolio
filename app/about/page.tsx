"use client"

import { useEffect } from "react"
import { Mail, Instagram, Facebook } from "lucide-react"

import { Title } from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { ChatIntro } from "@/components/chat-intro"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold  text-center animate-fade-in-up">
          Rólam & Kontakt
        </h1>
        < ChatIntro />
        <div className="max-w-sm mx-auto">
          <Title color="black"/>
        </div>
        <div className="bg-card rounded-lg p-8 sm:p-12 animate-scale-in">

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Halihó, egy egyetemista vagyok, aki felfedezte időközben, hogy a fotózásnak nagy szerepe kéne, legyen az életében.
              Ha szeretnéd megtudni, hogy miért is fotózok, mi jó benne nekem, olvass tovább (jajj milyen hatásvadász aghhh)
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Amit fent láttok chat-et, az egy olyan beszélgetést akar bemutatni, amit egy barátommal folytattam le, amikor elkezdtem a fotós instámat és neveken gondolkodtam; egy sokkal hosszabb beszélgetés volt, sokkal több ötlettel, de talán visszaadja, hogy született ez a név, az egyheppem. Amúgy az elején viszonylag viccből indítottam el pl az instám, vagy nem vettem komolyan, ezért is az a profil, ami jelenleg van, rámragadt. Tudtam, hogy 5 like-om jó, ha lesz, így indultam neki. Már többet kapok, amiért nagyon hálás vagyok.
              <br /><br />
              Szeretek arra figyelni, hogy mi tetszik annak, aki felkér fotózni, megpróbálom azt a stílust visszaadni, nem hiszek abban, hogy elveszne a saját stílusom benne.
              Fotóztam korábban is, egyetemen is, de akkor kezdtem el jobban megismerkedni a fotózással, amikor az Aurórába kerültem. Akkor úgy éreztem, hogy bedobtam magam a mélyvízbe: kevés fény, pince, koncert és ne használj vakut; azóta szerelmese vagyok ennek a műfajnak.
              Ott úgy éreztem, hogy nagyon szívesen csinálom, külön öröm volt, ahogy mások örültek a képeknek, amikor megkapták őket, és talán ez a fő számomra továbbra is: egy-egy képnek mennyire tudnak örülni az emberek.
              Én is nagyon tudok örülni, amkikor kapok képet egy-egy eseményről, magamról, barátaimról. 
              Merem remélni, hogy a fotók relevanciája még nem veszett el.
            </p>
          </div>

          <div className="space-y-4 flex flex-col gap-1/2 shadow-xl w-content p-4 rounded-lg bg-accent-foreground">
            <a href="mailto:kosibazsofi@gmail.com" className="text-lg hover:text-primary transition-colors">
              <div className="flex p-3 rounded-lg items-center gap-3 hover:shadow hover:bg-accent">
                <Mail className="text-primary" size={24} />
                  kosibazsofi@gmail.com
              </div>
            </a>
            <a 
            href="https://instagram.com/egyheppem"
                target="_blank"
                rel="noopener noreferrer"
            className="text-lg hover:text-primary transition-colors">
              <div className="flex p-3 rounded-lg items-center gap-3 hover:shadow hover:bg-accent">
                <Instagram className="text-primary" size={24} />
                  @egyheppem
              </div>
            </a>

            <a 
              href="https://www.facebook.com/zsofi.kosiba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-primary transition-colors">
              <div className="flex p-3 rounded-lg items-center gap-3 hover:shadow hover:bg-accent">
                <Facebook className="text-primary" size={24} />
                  Kosiba Zsófi
              </div>
            </a>

          </div>
        </div>
      </div>
    </main>
  )
}
