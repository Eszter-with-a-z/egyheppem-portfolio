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
              Halihó, egy egyetemista vagyok, aki felfedezte idő közbe, hogy a fotózásnak nagy szerepe kéne, legyen az életében.
              Ha szeretnéd megtudni, hogy miért is fotózok, mi jó benne nekem, olvass tovább (jajj milyen hatásvadász aghhh)
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Amit fent láttok chat-et, az egy olyan beszélgetést akar bemutatni, ami egy barátommal folytattam le, amikor elkezdtem a fotós instámat és neveken gondolkotam, egy sokkal hosszabb beszélgetés volt, sokkal több ötlettel, de talán visszaadja, hogy született ez a név. Amúgy az elején viszonylag viccből indítottam el, tudtam, hogy 5 like-om jó, ha lesz. Már többet kapok, amiért nagyon hálás vagyok.
              Szeretek arra figyelni, hogy mi tetszik annak, aki felkér fotózni, megpróbálom azta  stílust visszaadni, nem hiszek abban, hogy elveszne a saját stílusom benne.
              Fotóztam korábban is, egyetemen is, de akkor kezdtem el jobban megismerkedni a a fotózással, amikor az Aurórába kerültem. Bedobtam magam a mélyvízbe, akkor úgy éreztem, hisz egy pince kevés fénnyel és koncertek, amiken nem mindig jó vakuzni.
              Ott úgy éreztem, hogy nagyon szívesen csinálom, külön öröm volt, ahogy mások örültek a képeknek,a mikor megkapták őket, és talán eza  fő számomra továbbra is: egy-egy képnek mennyire tudnak örülni az emberek.
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
