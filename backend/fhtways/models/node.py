from django.db import models

class Node(models.Model):
    node_id = models.CharField(max_length=255, unique=True)
    coord = models.JSONField()
    type = models.CharField(max_length=50)

    def __str__(self):
        return self.node_id