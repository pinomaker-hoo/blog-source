package observer;

public class SubscriberB implements Observer {
    @Override
    public void update() {
        System.out.println("B : Publisher has been updated.");
    }
}
