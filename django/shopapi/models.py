from django.db import models

# Create the Task class to describe the model.


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=6,
                                decimal_places=2)
    stock = models.PositiveIntegerField()

    def __str__(self):
        return self.name
