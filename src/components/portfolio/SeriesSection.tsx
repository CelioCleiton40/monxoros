import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export function SeriesSection() {
  return (
    <section aria-labelledby="series-title" className="mx-auto max-w-7xl px-6 pb-16">
      <h3 id="series-title" className="text-stone-900 font-semibold text-xl">Series</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Children of fire</CardTitle>
            <CardDescription>
              A series of journalistic reports that show the life of the lime workers. A rustic industry with little mechanization
              and cheap labor. The report shows the human aspect and the impacts of this reality on their families.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://placehold.co/800x600"
              alt="Children of fire placeholder"
              className="w-full h-auto rounded-lg border border-stone-200 object-cover"
              loading="lazy"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Kaolin miners</CardTitle>
            <CardDescription>
              A series of journalistic reports that show the life of the kaolin miners. A rustic activity developed by people who
              risk their lives in order to keep the lives of their family members. The report shows the human aspect and the impacts
              of this reality on their families.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://placehold.co/800x600"
              alt="Kaolin miners placeholder"
              className="w-full h-auto rounded-lg border border-stone-200 object-cover"
              loading="lazy"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Candid Photography</CardTitle>
            <p className="text-stone-500 text-xs">encounter with the sacred</p>
            <CardDescription>
              The photographic language can awaken in individuals the need to relate to the sacred. The understanding of beauty and
              contemplation raises our awareness and empathy for the community. The path of self-knowledge.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://placehold.co/800x600"
              alt="Candid Photography placeholder"
              className="w-full h-auto rounded-lg border border-stone-200 object-cover"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}