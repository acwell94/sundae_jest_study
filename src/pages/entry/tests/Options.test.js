import { render, screen } from "@testing-library/react";

import Options from "../Option";

test("display image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImage = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImage).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImage.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
