$(document).ready(function () {
    let selectedAmenities = [];
  
    $('input[type="checkbox"]').change(function () {
      const amenityId = $(this).data("id");
      const amenityName = $(this).data("name");
  
      if (this.checked) {
        selectedAmenities.push({ id: amenityId, name: amenityName });
      } else {
        selectedAmenities = selectedAmenities.filter(
          (amenity) => amenity.id !== amenityId
        );
      }
  
      const amenityNames = selectedAmenities.map((amenity) => amenity.name);
      $("div.amenities h4").text(amenityNames.join(", "));
    });
});
