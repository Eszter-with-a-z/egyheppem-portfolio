export interface Testimonial {
  id: string
  name: string
  text: string
  role?: string
}
/* Mock data */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Bride",
    text: "Kosiba captured our wedding day perfectly. Every photo tells a story and brings back beautiful memories. Her eye for detail is incredible!",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO, TechCorp",
    text: "Professional, creative, and reliable. The corporate event photos exceeded our expectations. Highly recommended!",
  },
  {
    id: "3",
    name: "Emma Williams",
    role: "Model",
    text: "Working with Kosiba is always a pleasure. She knows how to make you feel comfortable and brings out the best in every shot.",
  },
  {
    id: "4",
    name: "David Martinez",
    role: "Architect",
    text: "The architectural photography series perfectly captured the essence of our designs. Stunning work!",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Fashion Designer",
    text: "Kosiba's fashion editorial work is exceptional. She understands lighting, composition, and how to showcase clothing beautifully.",
  },
  {
    id: "6",
    name: "James Taylor",
    role: "Groom",
    text: "We couldn't be happier with our wedding photos. Kosiba was unobtrusive yet captured every important moment. True artistry!",
  },
]
