import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content:
        "You can use React on a project if you want to,You can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want to",
    },
    {
      id: 2,
      label: "Can I use React on a project?",
      content:
        "You can use React on a project if you want to,You can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want to",
    },
    {
      id: 3,
      label: "Can I use React on a project?",
      content:
        "You can use React on a project if you want to,You can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want toYou can use React on a project if you want to",
    },
  ];

  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
