import { connectClient, stopClient } from '../server/db';

async function main() {
  const client = await connectClient();

  await client.collection('contests').deleteMany({});

  const resp = await client.collection('contests').insertMany([
    {
      id: 'cognitive-building-bricks',
      categoryName: 'Business/Company',
      contestName: 'Cognitive Building Bricks',
      description: `
This product is a classroom tool that scaffolds higher order thinking. Its a collaborative strategy that using building bricks to help structure students ideas. Learners build knowledge structures with information (attached to different coloured bricks). Students desks are turned into workshops where they physically manipulate information into meaningful creations. They show sequences of information (like stories), rank information by importance and pretty much all other essential cognitive skills you need at school. The end result is clarity in thought and better collaborative conversations. I want this to be marketed as a sophisticated knowledge tool applicable to all ages and subjects. It gives students the cognitive edge, they get a little more 'RAM'!.

I want to continue with the construction/building theme as well as the mind/brain/learning theme. They need to be blended somehow. Teachers find it easier to talk about building/scaffolding analogies as its less abstract.
      `,
      names: [
        {
          id: 'mind-assembly',
          name: 'Mind Assembly',
          timestamp: new Date(),
        },
        {
          id: 'brain-scaffold',
          name: 'Brain Scaffold',
          timestamp: new Date(),
        },
      ],
    },
    {
      id: 'educating-people-about-sustainable-food-production',
      categoryName: 'Magazine/Newsletter',
      contestName:
        'Educating people about sustainable food production',
      description: `
Educating people about sustainable food production
      `,
      names: [],
    },
    {
      id: 'big-data-analytics-for-cash-circulation',
      categoryName: 'Software Component',
      contestName: 'Big Data Analytics for Cash Circulation',
      description: `
      Information is generated at each interaction throughout the lifespan of a note. Due to the sheer quantity of this information, storing, processing, and deriving insights from it can pose significant challenges. However, by leveraging big data technologies to gather, process, and analyze this data, and then presenting the findings through an interactive interface, it becomes much simpler to arrive at informed decisions, address issues, and strategize for the future.

      This solution leverages big data technologies and presents the outcomes in contemporary web browsers, combining robust visualization tools with a data-centric approach to interact with the information.
      
      It empowers you to scrutinize data that were formerly beyond reach. The size, diversity, intricacy of the analytical operations involved, and the need for real-time responsiveness can all be met with this product. This not only leads to more intelligent decision-making but also offers quicker time-to-value.`,
      names: [
        {
          id: 'cash-view',
          name: 'Cash View',
          timestamp: new Date(),
        },
        {
          id: 'currency-map',
          name: 'Currency Map',
          timestamp: new Date(),
        },
        {
          id: 'cash-board',
          name: 'Cash Board',
          timestamp: new Date(),
        },
      ],
    },
    {
      id: 'free-programming-books',
      categoryName: 'Website',
      contestName: 'Free programming books',
      description: `
A list of free online programming books, categorized by languages/topics
    `,
      names: [],
    },
  ]);

  console.info('Inserted Contests:', resp.insertedCount);

  stopClient();
}

main();
