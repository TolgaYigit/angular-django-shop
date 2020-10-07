from django.db import migrations


def create_dummy_products(apps, schema_editor):
    Product = apps.get_model('shopapi', 'Product')

    Product(name='Gaming Laptop', price=400, stock=10).save()
    Product(name='PlayStation 5', price=600, stock=1).save()
    Product(name='Xbox Series X', price=600, stock=2).save()


class Migration(migrations.Migration):

    dependencies = [
        ('shopapi', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_dummy_products),
    ]
